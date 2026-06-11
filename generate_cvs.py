from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white, black
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from PIL import Image
import tempfile, os

PROFILE_PHOTO = "/Users/pedro/Documents/projetos/portfolio/bentos-next/public/images/about/profile3.png"

def _prepare_photo(photo_path):
    """Convert RGBA PNG to RGB JPEG for reportlab compatibility."""
    img = Image.open(photo_path).convert("RGBA")
    background = Image.new("RGB", img.size, (26, 26, 46))
    background.paste(img, mask=img.split()[3])
    tmp = tempfile.NamedTemporaryFile(suffix=".jpg", delete=False)
    background.save(tmp.name, "JPEG", quality=90)
    tmp.close()
    return tmp.name

FONTS_DIR = "/System/Library/Fonts/Supplemental"
pdfmetrics.registerFont(TTFont("Arial", f"{FONTS_DIR}/Arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", f"{FONTS_DIR}/Arial Bold.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Italic", f"{FONTS_DIR}/Arial Italic.ttf"))
pdfmetrics.registerFont(TTFont("Arial-BoldItalic", f"{FONTS_DIR}/Arial Bold Italic.ttf"))
pdfmetrics.registerFontFamily("Arial", normal="Arial", bold="Arial-Bold", italic="Arial-Italic", boldItalic="Arial-BoldItalic")

# Page dimensions
PAGE_W, PAGE_H = A4  # 595 x 842

# Colors
DARK_NAVY = HexColor("#1a1a2e")
ACCENT = HexColor("#8200DB")
MUTED_GRAY = HexColor("#666666")
LIGHT_BG = HexColor("#f8f9fa")
TEXT_DARK = HexColor("#1a1a1e")
SIDEBAR_TEXT = white
SIDEBAR_MUTED = HexColor("#aab4c8")

# Layout
SIDEBAR_W = 185
SIDEBAR_X = 0
MAIN_X = SIDEBAR_W + 24
MAIN_W = PAGE_W - MAIN_X - 24
MARGIN_TOP = 30


def draw_circular_image(c, img_path, cx, cy, radius):
    """Draw an image clipped to a circle centered at (cx, cy) with given radius."""
    from reportlab.graphics.shapes import Circle
    p = c.beginPath()
    p.circle(cx, cy, radius)
    c.saveState()
    c.clipPath(p, stroke=0, fill=0)
    img = ImageReader(img_path)
    iw, ih = img.getSize()
    # Draw square region that covers the circle
    size = radius * 2
    c.drawImage(img_path, cx - radius, cy - radius, width=size, height=size,
                preserveAspectRatio=True, mask='auto')
    c.restoreState()


def draw_sidebar(c, data):
    # Sidebar background
    c.setFillColor(DARK_NAVY)
    c.rect(0, 0, SIDEBAR_W, PAGE_H, fill=1, stroke=0)

    cx = SIDEBAR_W / 2
    PHOTO_RADIUS = 60
    PHOTO_TOP_MARGIN = MARGIN_TOP + PHOTO_RADIUS + 8
    photo_cy = PAGE_H - PHOTO_TOP_MARGIN

    # Profile photo (circular)
    draw_circular_image(c, _PHOTO_TMP, cx, photo_cy, PHOTO_RADIUS)

    y = photo_cy - PHOTO_RADIUS - 28

    # Contact section
    c.setFillColor(ACCENT)
    c.setFont("Arial-Bold", 7.5)
    c.drawString(16, y, data["contact_label"].upper())
    y -= 6

    c.setFillColor(ACCENT)
    c.rect(16, y, SIDEBAR_W - 32, 1, fill=1, stroke=0)
    y -= 14

    c.setFont("Arial", 8)
    for item in data["contact"]:
        c.setFillColor(SIDEBAR_TEXT)
        # Display LinkedIn with short handle only
        if "linkedin.com/in/" in item:
            handle = item.split("linkedin.com/in/")[-1]
            c.setFillColor(SIDEBAR_MUTED)
            c.setFont("Arial", 8)
            c.drawString(16, y, "LinkedIn:")
            hx = 16 + c.stringWidth("LinkedIn: ", "Arial", 8)
            draw_link(c, hx, y, handle, "https://" + item)
            y -= 13
        elif "@" in item:
            draw_link(c, 16, y, item, "mailto:" + item)
            y -= 13
        elif "vercel.app" in item:
            draw_link(c, 16, y, item, "https://" + item)
            y -= 13
        else:
            # Wrap long text
            if len(item) > 26:
                parts = [item[:26], item[26:]]
            else:
                parts = [item]
            for part in parts:
                c.drawString(16, y, part)
                y -= 12
            y -= 1

    y -= 10

    # Skills section
    c.setFillColor(ACCENT)
    c.setFont("Arial-Bold", 7.5)
    c.drawString(16, y, data["skills_label"].upper())
    y -= 6

    c.setFillColor(ACCENT)
    c.rect(16, y, SIDEBAR_W - 32, 1, fill=1, stroke=0)
    y -= 14

    c.setFont("Arial", 8)
    for skill in data["skills"]:
        c.setFillColor(ACCENT)
        c.circle(20, y + 3, 2, fill=1, stroke=0)
        c.setFillColor(SIDEBAR_TEXT)
        c.drawString(27, y, skill)
        y -= 14

    y -= 10

    # Education section
    c.setFillColor(ACCENT)
    c.setFont("Arial-Bold", 7.5)
    c.drawString(16, y, data["education_label"].upper())
    y -= 6

    c.setFillColor(ACCENT)
    c.rect(16, y, SIDEBAR_W - 32, 1, fill=1, stroke=0)
    y -= 14

    for edu in data["education"]:
        c.setFillColor(SIDEBAR_TEXT)
        c.setFont("Arial-Bold", 8)
        # Institution name - wrap if needed
        inst = edu["institution"]
        if len(inst) > 22:
            c.drawString(16, y, inst[:22])
            y -= 11
            c.drawString(16, y, inst[22:])
        else:
            c.drawString(16, y, inst)
        y -= 11

        c.setFillColor(SIDEBAR_MUTED)
        c.setFont("Arial", 7.5)
        # Degree - wrap if needed
        degree = edu["degree"]
        words = degree.split()
        line = ""
        lines = []
        for word in words:
            test = (line + " " + word).strip()
            if len(test) > 24:
                lines.append(line)
                line = word
            else:
                line = test
        if line:
            lines.append(line)
        for l in lines:
            c.drawString(16, y, l)
            y -= 11

        c.setFillColor(ACCENT)
        c.drawString(16, y, edu["period"])
        y -= 18


def draw_link(c, x, y, text, url, font="Arial", size=8):
    """Draw a clickable link: accent color + underline."""
    w = c.stringWidth(text, font, size)
    c.setFillColor(ACCENT)
    c.setFont(font, size)
    c.drawString(x, y, text)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(0.5)
    c.line(x, y - 1.5, x + w, y - 1.5)
    c.linkURL(url, (x, y - 3, x + w, y + 8), relative=0)


def wrap_text_canvas(c, text, x, y, max_width, font_name, font_size, line_height):
    """Draw wrapped text on canvas, returns final y position."""
    c.setFont(font_name, font_size)
    words = text.split()
    line = ""
    for word in words:
        test = (line + " " + word).strip()
        w = c.stringWidth(test, font_name, font_size)
        if w > max_width and line:
            c.drawString(x, y, line)
            y -= line_height
            line = word
        else:
            line = test
    if line:
        c.drawString(x, y, line)
        y -= line_height
    return y


def draw_main(c, data):
    y = PAGE_H - MARGIN_TOP

    # Name
    c.setFillColor(TEXT_DARK)
    c.setFont("Arial-Bold", 26)
    c.drawString(MAIN_X, y, data["name"])
    y -= 32

    # Title
    c.setFillColor(MUTED_GRAY)
    c.setFont("Arial", 10)
    # Wrap title if needed
    title = data["title"]
    title_w = c.stringWidth(title, "Arial", 10)
    if title_w > MAIN_W:
        # Split at middle dot
        parts = title.split(" · ")
        mid = len(parts) // 2
        line1 = " · ".join(parts[:mid])
        line2 = " · ".join(parts[mid:])
        c.drawString(MAIN_X, y, line1)
        y -= 14
        c.drawString(MAIN_X, y, line2)
        y -= 14
    else:
        c.drawString(MAIN_X, y, title)
        y -= 14

    # Accent line under header
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2)
    c.line(MAIN_X, y, PAGE_W - 24, y)
    y -= 18

    # Summary section
    c.setFillColor(DARK_NAVY)
    c.setFont("Arial-Bold", 9)
    c.drawString(MAIN_X, y, data["summary_label"].upper())
    y -= 5
    c.setFillColor(ACCENT)
    c.rect(MAIN_X, y, MAIN_W, 1, fill=1, stroke=0)
    y -= 13

    c.setFillColor(MUTED_GRAY)
    y = wrap_text_canvas(c, data["bio"], MAIN_X, y, MAIN_W, "Arial", 8.5, 13)
    y -= 14

    # Experience section
    c.setFillColor(DARK_NAVY)
    c.setFont("Arial-Bold", 9)
    c.drawString(MAIN_X, y, data["experience_label"].upper())
    y -= 5
    c.setFillColor(ACCENT)
    c.rect(MAIN_X, y, MAIN_W, 1, fill=1, stroke=0)
    y -= 13

    for exp in data["experience"]:
        if y < 80:
            break

        # Company + role
        c.setFillColor(TEXT_DARK)
        c.setFont("Arial-Bold", 9.5)
        title_str = f"{exp['company']}  —  {exp['role']}"
        title_w = c.stringWidth(title_str, "Arial-Bold", 9.5)
        if title_w > MAIN_W:
            c.drawString(MAIN_X, y, f"{exp['company']}")
            y -= 12
            c.setFont("Arial-Bold", 9)
            c.drawString(MAIN_X, y, exp['role'])
        else:
            c.drawString(MAIN_X, y, title_str)
        y -= 12

        # Period + location
        c.setFillColor(ACCENT)
        c.setFont("Arial", 8)
        period_loc = exp["period"]
        if exp.get("location"):
            period_loc += f"  ·  {exp['location']}"
        c.drawString(MAIN_X, y, period_loc)
        y -= 13

        # Bullets
        for bullet in exp["bullets"]:
            if y < 60:
                break
            c.setFillColor(ACCENT)
            c.circle(MAIN_X + 4, y + 3, 2, fill=1, stroke=0)
            c.setFillColor(MUTED_GRAY)
            y = wrap_text_canvas(
                c, bullet, MAIN_X + 12, y, MAIN_W - 12, "Arial", 8, 12
            )

        y -= 10


def generate_cv(output_path, data):
    c = canvas.Canvas(output_path, pagesize=A4)
    draw_sidebar(c, data)
    draw_main(c, data)
    c.save()
    print(f"Created: {output_path}")


_PHOTO_TMP = _prepare_photo(PROFILE_PHOTO)


# ── PT DATA ──────────────────────────────────────────────────────────────────

PT_DATA = {
    "name": "Pedro Tamburro",
    "title": "Product Designer  ·  Design Engineer  ·  UX/UI ponta a ponta  ·  Produtos com IA",
    "contact_label": "Contato",
    "contact": [
        "pedropaulotjr@gmail.com",
        "linkedin.com/in/pedrotamburro",
        "pedrotambs.vercel.app",
        "Rio de Janeiro, Brasil",
    ],
    "skills_label": "Competências",
    "skills": [
        "Design de Produto",
        "Experiência do Usuário (UX)",
        "Arquitetura de Informação",
        "Vibe Coding / AI Engineering",
        "HTML  CSS  JavaScript",
        "React  Next.js  Figma",
    ],
    "education_label": "Formação",
    "education": [
        {
            "institution": "UX Unicórnio",
            "degree": "MBA em Inovação Orientada a IA e UX",
            "period": "Jul 2025 – Set 2026",
        },
        {
            "institution": "Instituto Infnet",
            "degree": "MBA em UX Design & Arquitetura da Informação",
            "period": "Abr 2023 – Abr 2024",
        },
        {
            "institution": "Senac RJ",
            "degree": "Graduação em Design Gráfico",
            "period": "2013 – 2018",
        },
    ],
    "summary_label": "Perfil",
    "bio": (
        "Product Designer com 16 anos de carreira, 7 em produto digital (UX/UI). "
        "Da descoberta e arquitetura de informação à implementação em HTML/CSS/JS. "
        "Construo produtos orientados por IA com vibe coding, da ideia à produção. "
        "Aberto a oportunidades como Product Designer em times de produto digital."
    ),
    "experience_label": "Experiência",
    "experience": [
        {
            "company": "Editora Globo",
            "role": "Product Designer · Conversão & Aquisição",
            "period": "Nov 2022 – Presente",
            "location": "Rio de Janeiro",
            "bullets": [
                "Design de páginas de aquisição e fluxos de assinatura orientados a conversão e crescimento de receita para os produtos digitais da Editora Globo.",
                "Implementação de landing pages em HTML/CSS/JS, otimização de jornadas com base em métricas de performance (CRO) e email marketing responsivo.",
            ],
        },
        {
            "company": "Universo Observável",
            "role": "Designer & Founder",
            "period": "Dez 2017 – Presente",
            "location": "Rio de Janeiro",
            "bullets": [
                "Marca autoral de design. Da ilustração e identidade visual à prototipação de SaaS, apps e produtos digitais de ponta a ponta, integrando UX, front-end e AI-driven design.",
            ],
        },
        {
            "company": "YDUQS",
            "role": "Product Designer · UX/UI",
            "period": "Jun 2020 – Nov 2021",
            "location": "",
            "bullets": [
                "Atuação na EnsineMe (grupo YDUQS) em times multidisciplinares de produtos educacionais digitais.",
                "Prototipação no Figma e desenvolvimento de aulas EAD em HTML/CSS/JS com alta fidelidade ao protótipo.",
                "Aplicação de Design System, redesign de infográficos e gestão de demandas em metodologias ágeis (Azure DevOps).",
            ],
        },
        {
            "company": "Estácio",
            "role": "Product Designer · UX/UI",
            "period": "Jul 2019 – Jun 2020",
            "location": "Rio de Janeiro",
            "bullets": [
                "Design de interfaces educacionais para a plataforma EAD, com foco em clareza pedagógica e consistência.",
                "Desenvolvimento de aulas EAD em HTML/CSS/JS, aplicação de Design System e redesign de infográficos educacionais.",
            ],
        },
        {
            "company": "Zion Escola de Entretenimento",
            "role": "Professor de Design Gráfico",
            "period": "Dez 2018 – Abr 2019",
            "location": "Rio de Janeiro",
            "bullets": [
                "Ensino presencial de Design Gráfico para adolescentes e crianças.",
            ],
        },
        {
            "company": "Conspiração Filmes",
            "role": "Estagiário de Design",
            "period": "Fev 2011 – Jan 2012",
            "location": "Rio de Janeiro",
            "bullets": [
                "Edição e finalização de materiais fotográficos e em vídeo para produções independentes.",
            ],
        },
        {
            "company": "BRQ",
            "role": "Estagiário de Web Design",
            "period": "Jun 2010 – Dez 2010",
            "location": "Rio de Janeiro",
            "bullets": [
                "Apoio no desenvolvimento de interfaces e projetos web em colaboração com o time de design.",
            ],
        },
    ],
}

# ── EN DATA ──────────────────────────────────────────────────────────────────

EN_DATA = {
    "name": "Pedro Tamburro",
    "title": "Product Designer  ·  Design Engineer  ·  UX/UI end-to-end  ·  AI-driven Products",
    "contact_label": "Contact",
    "contact": [
        "pedropaulotjr@gmail.com",
        "linkedin.com/in/pedrotamburro",
        "pedrotambs.vercel.app",
        "Rio de Janeiro, Brazil",
    ],
    "skills_label": "Core Skills",
    "skills": [
        "Product Design",
        "User Experience (UX)",
        "Information Architecture",
        "Vibe Coding / AI Engineering",
        "HTML  CSS  JavaScript",
        "React  Next.js  Figma",
    ],
    "education_label": "Education",
    "education": [
        {
            "institution": "UX Unicornio",
            "degree": "MBA in AI-Driven Innovation & UX",
            "period": "Jul 2025 – Sep 2026",
        },
        {
            "institution": "Instituto Infnet",
            "degree": "MBA in UX Design & Information Architecture",
            "period": "Apr 2023 – Apr 2024",
        },
        {
            "institution": "Senac RJ",
            "degree": "Bachelor of Graphic Design",
            "period": "2013 – 2018",
        },
    ],
    "summary_label": "Profile",
    "bio": (
        "Product Designer with 16 years of experience, 7 in digital product (UX/UI). "
        "From discovery and information architecture to HTML/CSS/JS implementation. "
        "I build AI-driven products and vibe code from idea to production. "
        "Open to opportunities as a Product Designer in digital product teams."
    ),
    "experience_label": "Experience",
    "experience": [
        {
            "company": "Editora Globo",
            "role": "Product Designer · Conversion & Acquisition",
            "period": "Nov 2022 – Present",
            "location": "Rio de Janeiro",
            "bullets": [
                "Design of acquisition pages and subscription flows focused on conversion and revenue growth for Editora Globo's digital products.",
                "Landing page implementation in HTML/CSS/JS, conversion journey optimization based on performance metrics (CRO) and responsive email marketing.",
            ],
        },
        {
            "company": "Universo Observavel",
            "role": "Designer & Founder",
            "period": "Dec 2017 – Present",
            "location": "Rio de Janeiro",
            "bullets": [
                "Independent design brand. From illustration and visual identity to prototyping SaaS, apps and end-to-end digital products, integrating UX, front-end and AI-driven design.",
            ],
        },
        {
            "company": "YDUQS",
            "role": "Product Designer · UX/UI",
            "period": "Jun 2020 – Nov 2021",
            "location": "",
            "bullets": [
                "Worked at EnsineMe (YDUQS group) in multidisciplinary teams building digital educational products.",
                "Figma prototyping and development of e-learning lessons in HTML/CSS/JS with high prototype fidelity.",
                "Design System application, redesign of infographics and agile demand management (Azure DevOps).",
            ],
        },
        {
            "company": "Estacio",
            "role": "Product Designer · UX/UI",
            "period": "Jul 2019 – Jun 2020",
            "location": "Rio de Janeiro",
            "bullets": [
                "Design of educational interfaces for the distance learning platform, focused on pedagogical clarity and consistency.",
                "Development of e-learning lessons in HTML/CSS/JS, Design System application and redesign of educational infographics.",
            ],
        },
        {
            "company": "Zion Escola de Entretenimento",
            "role": "Graphic Design Teacher",
            "period": "Dec 2018 – Apr 2019",
            "location": "Rio de Janeiro",
            "bullets": [
                "In-person Graphic Design teaching for teenagers and children.",
            ],
        },
        {
            "company": "Conspiracao Filmes",
            "role": "Design Intern",
            "period": "Feb 2011 – Jan 2012",
            "location": "Rio de Janeiro",
            "bullets": [
                "Editing and finishing of photographic and video materials for independent productions.",
            ],
        },
        {
            "company": "BRQ",
            "role": "Web Design Intern",
            "period": "Jun 2010 – Dec 2010",
            "location": "Rio de Janeiro",
            "bullets": [
                "Support in the development of interfaces and web projects in collaboration with the design team.",
            ],
        },
    ],
}

BASE = "/Users/pedro/Documents/projetos/portfolio/bentos-next/public"

generate_cv(f"{BASE}/pedro-tamburro-cv-pt.pdf", PT_DATA)
generate_cv(f"{BASE}/pedro-tamburro-cv-en.pdf", EN_DATA)

os.unlink(_PHOTO_TMP)

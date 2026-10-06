import { Resend } from 'resend';

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

export async function POST(request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const body = await request.json();

        if (!body.name || !body.email || !body.message) {
            return Response.json({ error: 'Campos obrigatórios faltando.' }, { status: 400 });
        }

        const name = escapeHtml(body.name);
        const email = escapeHtml(body.email);
        const message = escapeHtml(body.message);

        const { error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'pedropaulotjr@gmail.com',
            replyTo: body.email,
            subject: `[Portfolio] Nova mensagem de ${body.name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0D0D18; color: #F0F0FA; border-radius: 12px;">
                    <h2 style="color: #C070FF; margin-bottom: 24px;">Nova mensagem do portfólio</h2>
                    <p><strong>Nome:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #8200DB;">${email}</a></p>
                    <hr style="border-color: #2D2540; margin: 24px 0;" />
                    <p><strong>Mensagem:</strong></p>
                    <p style="white-space: pre-wrap; color: rgba(240,240,250,0.8);">${message}</p>
                </div>
            `,
        });

        if (error) {
            return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json({ success: true });
    } catch (err) {
        return Response.json({ error: 'Erro interno.' }, { status: 500 });
    }
}

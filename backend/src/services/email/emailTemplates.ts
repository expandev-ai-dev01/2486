/**
 * @summary
 * Email templates for HORTelã confirmation emails.
 * Provides HTML and text versions of confirmation email.
 *
 * @module services/email/emailTemplates
 */

import { EmailTemplate } from './emailTypes';

/**
 * @summary
 * Generates confirmation email template for contact form submission.
 *
 * @function generateConfirmationEmailTemplate
 * @module services/email
 *
 * @param {string} recipientName - Name of the person who submitted contact
 * @returns {EmailTemplate} Email template with subject and body
 *
 * @example
 * const template = generateConfirmationEmailTemplate('João Silva');
 * // Returns email template with personalized content
 */
export function generateConfirmationEmailTemplate(recipientName: string): EmailTemplate {
  const subject = 'Obrigado pelo seu interesse!';

  const htmlBody = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmação de Interesse - HORTelã</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 5px 5px 0 0;
    }
    .content {
      background-color: #f9f9f9;
      padding: 30px;
      border-radius: 0 0 5px 5px;
    }
    .greeting {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .message {
      margin-bottom: 20px;
    }
    .categories {
      background-color: white;
      padding: 15px;
      border-left: 4px solid #4CAF50;
      margin: 20px 0;
    }
    .categories ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    .signature {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>HORTelã - Produtos Naturais</h1>
  </div>
  <div class="content">
    <div class="greeting">
      <strong>Olá, ${recipientName}!</strong>
    </div>
    
    <div class="message">
      <p>Obrigado pelo seu interesse nos nossos produtos naturais!</p>
      <p>Recebemos o seu contato e nossa equipe entrará em contato em breve para apresentar melhor nossos produtos e esclarecer suas dúvidas.</p>
    </div>

    <div class="categories">
      <p><strong>Conheça nossas categorias de produtos:</strong></p>
      <ul>
        <li><strong>Chás Medicinais:</strong> Produtos naturais para seu bem-estar</li>
        <li><strong>Temperos e Condimentos:</strong> Sabor natural para suas receitas</li>
        <li><strong>Plantas Aromáticas:</strong> Frescor e aroma para seu dia a dia</li>
        <li><strong>Óleos Essenciais:</strong> Essências puras da natureza</li>
      </ul>
    </div>

    <div class="message">
      <p>Estamos ansiosos para compartilhar com você os benefícios dos nossos produtos 100% naturais!</p>
    </div>

    <div class="signature">
      <p>Atenciosamente,<br>
      <strong>Equipe HORTelã - Produtos Naturais</strong></p>
    </div>
  </div>
</body>
</html>
  `;

  const textBody = `
Olá, ${recipientName}!

Obrigado pelo seu interesse nos nossos produtos naturais!

Recebemos o seu contato e nossa equipe entrará em contato em breve para apresentar melhor nossos produtos e esclarecer suas dúvidas.

Conheça nossas categorias de produtos:

• Chás Medicinais: Produtos naturais para seu bem-estar
• Temperos e Condimentos: Sabor natural para suas receitas
• Plantas Aromáticas: Frescor e aroma para seu dia a dia
• Óleos Essenciais: Essências puras da natureza

Estamos ansiosos para compartilhar com você os benefícios dos nossos produtos 100% naturais!

Atenciosamente,
Equipe HORTelã - Produtos Naturais
  `;

  return {
    subject,
    htmlBody,
    textBody,
  };
}

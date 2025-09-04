# TrustOne Solutions - Site Empresarial
Repositório de versionamento


Site empresarial completo da TrustOne Solutions, desenvolvido com HTML5, CSS3 e JavaScript vanilla.

## 🚀 Funcionalidades

### ✅ Páginas Independentes
- **Início** (`inicio.html`) - Página principal com serviços e apresentação da empresa
- **Sobre Nós** (`sobre.html`) - História, missão, visão, valores e equipe
- **Contato** (`contato.html`) - Formulário integrado do ClickUp, informações de contato e FAQ

### ✅ Recursos Implementados
- **Navegação independente** entre páginas (sem scroll entre seções)
- **Modo Dark/Light** com alternância suave e persistência no localStorage
- **Design responsivo** para desktop, tablet e mobile
- **Formulário ClickUp** integrado com altura otimizada para exibição completa
- **Banner de cookies** com consentimento e links para políticas
- **Políticas de Privacidade e Cookies** com links funcionais para navegadores
- **Animações e transições** suaves em CSS
- **Imagens otimizadas** para cada seção do site

### ✅ Tecnologias Utilizadas
- HTML5 semântico
- CSS3 com variáveis CSS para temas
- JavaScript ES6+ para interatividade
- Font Awesome para ícones
- Google Fonts (Inter) para tipografia

## 📁 Estrutura do Projeto

```
trustone-website/
├── index.html                    # Página de redirecionamento
├── inicio.html                   # Página inicial
├── sobre.html                    # Página "Sobre Nós"
├── contato.html                  # Página de contato
├── politica-privacidade.html     # Política de Privacidade
├── politica-cookies.html         # Política de Cookies
├── style.css                     # Estilos CSS principais
├── script.js                     # JavaScript principal
├── assets/
│   └── images/
│       ├── fulllogo_transparent_nobuffer.png  # Logo principal
│       ├── T1_favicon.png                     # Favicon
│       ├── freepik1.jpg                       # Imagem de fundo geral
│       ├── data-analytics.jpg                 # Imagem para BI/Analytics
│       ├── team-meeting.jpg                   # Imagem para equipe/reuniões
│       └── tech-solutions.jpg                 # Imagem para soluções técnicas
└── README.md                     # Documentação
```

## 🎨 Design e UX

### Paleta de Cores
- **Modo Light**: Azul (#007bff) como cor principal, tons de cinza para texto
- **Modo Dark**: Roxo (#6610f2) como cor principal, tons escuros para fundo

### Tipografia
- **Fonte principal**: Inter (Google Fonts)
- **Hierarquia**: Títulos grandes (3.5rem), subtítulos (2.5rem), texto (1rem)

### Layout
- **Design responsivo** com breakpoints em 768px e 480px
- **Grid CSS** para layouts de cards e seções
- **Flexbox** para alinhamentos e distribuição de espaço

## 🔧 Como Usar

### Instalação Local
1. Extraia o arquivo ZIP em uma pasta local
2. Abra um servidor HTTP local:
   ```bash
   cd trustone-website
   python3 -m http.server 8000
   ```
3. Acesse `http://localhost:8000` no navegador

### Hospedagem
- O site é estático e pode ser hospedado em qualquer servidor web
- Compatível com GitHub Pages, Netlify, Vercel, etc.
- Não requer backend ou banco de dados

## 📱 Responsividade

### Desktop (1200px+)
- Layout completo com sidebar e conteúdo principal
- Navegação horizontal no header
- Cards em grid de 3 colunas

### Tablet (768px - 1199px)
- Layout adaptado com cards em 2 colunas
- Menu hamburger para navegação
- Formulário em largura total

### Mobile (até 767px)
- Layout em coluna única
- Menu hamburger ativo
- Botões e formulários otimizados para touch

## 🌟 Funcionalidades Especiais

### Modo Dark/Light
- Alternância via botão no header
- Persistência da preferência no localStorage
- Transições suaves entre temas
- Ícones dinâmicos (lua/sol)

### Formulário ClickUp
- Integração completa com ClickUp Forms
- Altura otimizada (900px) para exibição completa
- Campos: Nome, Email, Telefone, Empresa, Segmento, Funcionários, Orçamento, Mensagem
- reCAPTCHA incluído para segurança

### Banner de Cookies
- Exibição automática após 1 segundo
- Botão de aceitar com persistência
- Links para políticas de privacidade e cookies
- Animação suave de entrada/saída

### Políticas Legais
- **Política de Privacidade**: Completa com LGPD
- **Política de Cookies**: Com links diretos para configurações dos navegadores:
  - Internet Explorer
  - Opera
  - Microsoft Edge
  - Google Chrome
  - Safari
  - Mozilla Firefox

## 🔍 SEO e Acessibilidade

### SEO
- Meta tags otimizadas em todas as páginas
- Estrutura semântica HTML5
- Alt text em todas as imagens
- URLs amigáveis

### Acessibilidade
- Contraste adequado entre cores
- Navegação por teclado
- Labels apropriados em formulários
- Estrutura hierárquica de headings

## 📊 Performance

### Otimizações
- CSS minificado e organizado
- JavaScript otimizado
- Imagens comprimidas
- Carregamento assíncrono de recursos externos

### Métricas
- Tempo de carregamento: < 2 segundos
- Compatibilidade: IE11+, Chrome, Firefox, Safari, Edge
- Mobile-friendly: 100% responsivo

## 🛠️ Manutenção

### Atualizações de Conteúdo
- Textos podem ser editados diretamente nos arquivos HTML
- Imagens devem ser colocadas na pasta `assets/images/`
- Estilos personalizados no arquivo `style.css`

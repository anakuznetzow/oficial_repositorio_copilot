Desenvolvimento local — instruções rápidas

1) Instalar dependências no root (usa npm workspaces):
   npm install

2) Backend (API):
   cd backend
   npm install
   npm run dev
   -> ouvirá em http://localhost:4000, endpoints: /api/health, /api/users

3) Frontend (dev server):
   cd frontend
   npm install --save-dev live-server
   npm run dev
   -> abrirá http://localhost:3000

Notas:
- Próximos passos: integrar frontend com backend, adicionar auth (JWT), modelagem de DB e testes.
- Arquitetura e tokens iniciais implementados em frontend/src/styles.css conforme design-system_1.md (resumido).
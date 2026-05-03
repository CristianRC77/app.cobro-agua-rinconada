import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import pool, { testConnection } from './db.js';

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

app.get('/health', async (_req, res) => {
  try {
    await testConnection();
    res.json({ ok: true, mysql: true });
  } catch (error) {
    res.status(500).json({
      ok: false,
      mysql: false,
      message: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
});

app.get('/api/ping', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS serverTime');
    res.json({ ok: true, data: rows[0] });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error instanceof Error ? error.message : 'No se pudo consultar MySQL',
    });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        ok: false,
        message: 'Faltan credenciales.',
      });
    }

    //console.log('[Login] Intentando autenticar:', { email, password: '***' });

    const [rows] = await pool.query(
      'SELECT id_usuario, nombre_usuario, contrasenna FROM tbl_usuario WHERE nombre_usuario = ? AND contrasenna = ? LIMIT 1',
      [email, password],
    );

    //console.log('[Login] Resultado de consulta:', { rowsLength: rows.length });

    if (rows.length === 0) {
      return res.status(401).json({
        ok: false,
        message: 'Usuario o contraseña inválidos.',
      });
    }

    //console.log('[Login] Usuario autenticado:', { id: rows[0].id_usuario });

    return res.json({
      ok: true,
      user: rows[0],
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'No se pudo iniciar sesión';
    const errorCode = error instanceof Error ? error.code : undefined;
    //console.error('[Login] Error:', { message: errorMessage, code: errorCode });

    return res.status(500).json({
      ok: false,
      message: errorMessage,
      code: errorCode,
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

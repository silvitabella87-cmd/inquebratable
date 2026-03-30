export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }
  const { key, value } = req.body || {};
  if (!key) return res.status(400).json({ error: 'key requerida' });
  return res.status(200).json({ ok: true, key, saved: false, note: 'Fase 2 pendiente' });
}

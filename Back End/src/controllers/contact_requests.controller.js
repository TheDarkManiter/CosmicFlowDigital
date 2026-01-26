import pool from "../db/pool.js";

function normalizePayload(body) {
  const payload = body || {};

  return {
    package: payload.package || payload.package_slug,
    business: payload.business,
    objective: payload.objective,
    contact_name: payload.contact_name || payload.name,
    contact_email: payload.contact_email || payload.email,
    contact_phone: payload.contact_phone || payload.whatsapp,
    notes: payload.notes || payload.message,
  };
}

export async function postContactRequest(req, res, next) {
  const payload = normalizePayload(req.body);

  if (!payload.package || !payload.business || !payload.objective) {
    return res.status(400).json({
      ok: false,
      error: "VALIDATION_ERROR",
      details: "package, business and objective are required.",
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contact_requests
        (package, business, objective, contact_name, contact_email, contact_phone, notes)
       VALUES
        ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, created_at`,
      [
        payload.package,
        payload.business,
        payload.objective,
        payload.contact_name || null,
        payload.contact_email || null,
        payload.contact_phone || null,
        payload.notes || null,
      ]
    );

    res.status(201).json({
      ok: true,
      id: result.rows[0].id,
      created_at: result.rows[0].created_at,
    });
  } catch (error) {
    next(error);
  }
}

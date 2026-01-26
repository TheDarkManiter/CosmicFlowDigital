import pool from "../../db/pool.js";

export async function createLead(payload) {
  try {
    const result = await pool.query(
      `INSERT INTO leads
        (created_at, source, utm_source, utm_medium, utm_campaign, utm_content,
         package_slug, business, objective, name, whatsapp, email, message, consent)
       VALUES
        (NOW(), $1, $2, $3, $4, $5,
         $6, $7, $8, $9, $10, $11, $12, $13)
       RETURNING id, created_at`,
      [
        payload.source || "contact_form",
        payload.utm_source || null,
        payload.utm_medium || null,
        payload.utm_campaign || null,
        payload.utm_content || null,
        payload.package_slug,
        payload.business,
        payload.objective,
        payload.name,
        payload.whatsapp,
        payload.email || null,
        payload.message || null,
        payload.consent,
      ]
    );

    return result.rows[0];
  } catch (error) {
    if (error && error.code === "42P01") {
      const missingTableError = new Error(
        "Leads table not found. Run the migration to create 'leads'."
      );
      missingTableError.statusCode = 500;
      throw missingTableError;
    }

    throw error;
  }
}

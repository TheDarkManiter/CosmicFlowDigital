import { leadSchema } from "./leads.schema.js";
import { createLead } from "./leads.service.js";

function mapPackageAlias(body) {
  if (body && !body.package_slug && body.package) {
    return { ...body, package_slug: body.package };
  }

  return body;
}

export async function postLead(req, res, next) {
  const payload = mapPackageAlias(req.body || {});
  const validation = leadSchema.safeParse(payload);

  if (!validation.success) {
    return res.status(400).json({
      ok: false,
      error: "VALIDATION_ERROR",
      details: validation.error.flatten(),
    });
  }

  try {
    const created = await createLead(validation.data);
    res.status(201).json({ ok: true, id: created.id, created_at: created.created_at });
  } catch (error) {
    next(error);
  }
}

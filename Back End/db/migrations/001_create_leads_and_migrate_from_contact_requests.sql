-- Create leads table and migrate data from contact_requests (idempotent).
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  source TEXT NOT NULL DEFAULT 'contact_form',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  package_slug TEXT NOT NULL,
  package_label TEXT,
  selection_type TEXT,
  business TEXT NOT NULL,
  objective TEXT NOT NULL,
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT,
  message TEXT,
  consent BOOLEAN NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  notes TEXT,
  legacy_contact_request_id BIGINT UNIQUE,
  CONSTRAINT leads_status_check CHECK (status IN ('new','contacted','won','lost'))
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at_desc ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_package_slug ON leads (package_slug);

INSERT INTO leads (
  created_at,
  source,
  utm_source,
  utm_medium,
  utm_campaign,
  utm_content,
  package_slug,
  package_label,
  selection_type,
  business,
  objective,
  name,
  whatsapp,
  email,
  message,
  consent,
  status,
  notes,
  legacy_contact_request_id
)
SELECT
  cr.created_at,
  'contact_form' AS source,
  NULL AS utm_source,
  NULL AS utm_medium,
  NULL AS utm_campaign,
  NULL AS utm_content,
  cr.package AS package_slug,
  NULL AS package_label,
  NULL AS selection_type,
  cr.business,
  cr.objective,
  COALESCE(NULLIF(cr.contact_name, ''), 'Unknown') AS name,
  COALESCE(NULLIF(cr.contact_phone, ''), '') AS whatsapp,
  cr.contact_email,
  cr.notes AS message,
  TRUE AS consent,
  'new' AS status,
  NULL AS notes,
  cr.id AS legacy_contact_request_id
FROM contact_requests cr
WHERE NOT EXISTS (
  SELECT 1
  FROM leads l
  WHERE l.legacy_contact_request_id = cr.id
);

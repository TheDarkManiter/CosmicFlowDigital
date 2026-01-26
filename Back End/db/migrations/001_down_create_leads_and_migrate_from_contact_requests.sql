-- Rollback: remove migrated rows and drop leads table.
DELETE FROM leads
WHERE legacy_contact_request_id IS NOT NULL;

DROP TABLE IF EXISTS leads;

# RefugeeSkill Bridge: secure hackathon MVP

## Current checkpoint

Lovable Cloud is connected and its authentication and database services respond normally. Existing navigation and talent-search tests pass. The existing application still uses clearly labeled demo data; registration and login have not yet become live services.

Preserve the current navy, teal, white and light-grey design, typography, shared navigation and all requested screens. Confirm the saved-profile question before writing authentication code.

## Implementation

1. **Secure data foundation**
   - Inspect the connected database before applying additive migrations.
   - Create profiles, experiences, qualifications, skills, assessments, learning pathways, saved pathways and analysis results, plus separate account roles.
   - Include professional category, portfolio links, passport identifiers and sharing controls needed by the requested screens.
   - Keep profiles private and directory consent off by default. Separate directory consent from public passport sharing and assessment-summary sharing.
   - Enforce owner-only edits, controlled employer reads and securely assigned administrator access. Never automatically verify skills or qualifications.

2. **Real accounts and protected workspaces**
   - Replace registration/login previews with real email/password registration and login, Google and Lovable sign-in, logout and password recovery.
   - Offer Professional and Employer registration only. Create Administrator access only through a trusted assignment, never from editable profile data.
   - Keep email confirmation enabled; show confirmation and recovery states rather than implying users are already signed in.
   - Protect personal screens and redirect signed-in users to the appropriate professional or employer dashboard. Reflect the session in navigation and clear private cached data on logout.

3. **Saved professional information**
   - Persist editable professional details, languages, biography, multiple experiences, qualifications, skills, projects/volunteering and portfolio links.
   - Calculate completion from actual saved information and show save, empty, loading and error states.
   - Label self-reported and user-submitted evidence separately from independently reviewed information. Exclude identity and refugee-status documents.

4. **Assessment and skills analysis**
   - Preserve the original four reflection questions and add digital literacy, communication, problem-solving, teamwork, adaptability and professional learning categories.
   - Save answers, confidence summaries, growth areas and recommendations; support retaking assessments.
   - Use the brief's permitted basic keyword-matching fallback initially, explicitly labeled as not AI-generated. Derive skills, evidence suggestions and recommendations from the submitted text, not a predefined sample result.
   - Let users review and save results; distinguish self-reported confidence from practical competence and official accreditation.

5. **Passport, consent-based directory and learning**
   - Assemble passports from actual saved profile, skills, experience, education, languages and assessment information, with verification labels and last-updated date.
   - Add a unique public identifier, print-ready download and a public sharing page only when explicitly enabled. Project only safe fields, never private contact details.
   - Give employers a dashboard and searchable directory of consenting professional profiles, with category/experience filters and profile previews.
   - Restrict real administration statistics and actions to validated administrators; preserve the fictional Admin Preview only within the separate demo.
   - Keep existing courses labeled illustrative without invented accreditation or provider links. Add category/difficulty filtering, details, permanent saving and progress tracking.

6. **Separate demo and honest publication readiness**
   - Retain the six fictional professional examples in a clearly isolated judge-friendly demo experience, never mixed with the live directory or reported as verified.
   - Update privacy, terms and relevant notices to accurately reflect live storage and remaining illustrative features.
   - Test professional and employer registration, confirmed login/logout, saved profile records, analysis, assessment saving, passport download, pathway saving and consenting directory searches.
   - Test cross-user isolation, private-profile exclusion, consent revocation and administrator restrictions through the data-access boundary as well as the UI.
   - Check desktop, tablet and phone layouts. Report anything not tested; do not claim publication readiness before the core journeys pass.

## Technical decisions

- Use the existing TanStack Start framework and supported Lovable Cloud integration. New server operations use authenticated TanStack server functions, not new Edge Functions.
- Store authoritative roles in a protected `user_roles` table, not the requested editable `profiles.account_role` column, to prevent privilege escalation. Any displayed account type comes from those verified roles.
- Apply explicit grants and RLS in every application-table migration. Use narrow safe projections for directory/public sharing; owner access must continue to work for hidden records.
- Keep one typed route per real page with unique metadata. Personal pages live under the managed authenticated layout; public home and consent-enabled passport pages remain public.
- Keep reusable workspace views under `src/components/bridge`. Move current fictional views into a clearly separated demo rather than dropping the existing design.
- Seed illustrative courses and fictional demo data through migrations where database-backed demo rows are needed; do not create fake authenticated accounts or seed records on page load.
- No AI key or storage upload is needed for the first MVP: use honest input-based keyword analysis and textual evidence/portfolio references. A live AI service can replace the fallback later without changing the privacy boundary.

## Remaining prerequisite

The saved-profile question is open. Your brief requests profiles, so the proposed implementation uses saved professional profiles; the answer can narrow that scope before schema and authentication work begins.
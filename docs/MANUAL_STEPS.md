# CareTrail — Steps you do by hand

These are the things only you can do (creating accounts, pasting keys). Do them in order.
Screens change now and then, so a button may be named slightly differently — pick the closest match.

**Golden rule:** never paste a password or key into a chat. Paste them only into the website or file named in each step.

---

## Phase 1 — Put the landing page online

Total time: about 15 minutes.

### Step A — Create the Supabase project (the database)

1. Open <https://supabase.com> and click **Start your project** (or **Sign in**).
2. Choose **Continue with GitHub** and approve.
3. Click **New project**.
4. Fill in:
   - **Name:** `caretrail`
   - **Database password:** click **Generate a password**, then **Copy**. Save it in your password manager or a private note. You will need it once in Phase 2.
   - **Region:** `South Asia (Mumbai)`
   - **Plan:** Free
5. Click **Create new project** and wait about 2 minutes until it says the project is ready.
6. Keep this browser tab open — you need it in Step C.

### Step B — Create the Vercel project (the website host)

1. Open <https://vercel.com> and click **Sign Up** (or **Log In**).
2. Choose **Continue with GitHub** and approve.
3. Click **Add New…** → **Project**.
4. Under **Import Git Repository**, find **caretrail** and click **Import**.
   - If you cannot see it: click **Adjust GitHub App Permissions**, tick the `caretrail` repository, click **Save**, then come back.
5. Leave every setting as it is. **Framework Preset** should already say **Vite**.
6. Do **not** click Deploy yet — go straight to Step C.

### Step C — Add the two settings Vercel needs

You are copying two values from Supabase into Vercel. Both are safe, public values.

1. In the **Supabase** tab: click the **Connect** button at the top of the project page (or go to **Project Settings** → **API Keys** / **Data API**).
2. Find these two values:
   - **Project URL** — looks like `https://abcdefgh.supabase.co`
   - **Publishable key** (older projects call it **anon public** key)
   - Do **not** use anything labelled **secret** or **service_role**. Those must never go into Vercel.
3. In the **Vercel** tab, open the **Environment Variables** section and add two rows:

   | Key | Value |
   |---|---|
   | `VITE_SUPABASE_URL` | paste the Project URL |
   | `VITE_SUPABASE_ANON_KEY` | paste the Publishable (anon public) key |

4. Click **Deploy** and wait about 1 minute.
5. When it finishes, click **Continue to Dashboard**, then click the address under **Domains** (it looks like `caretrail-xxxx.vercel.app`).
6. You should see the CareTrail landing page with three buttons: Try as Patient, Try as Doctor, Try as Lab.

### Step D — Same two settings on your computer

1. Open the `caretrail` folder on your computer.
2. Make a copy of the file `.env.example` and name the copy `.env.local`.
3. Open `.env.local` in Notepad and paste the same two values after the `=` signs, like this (no spaces, no quotes):

   ```
   VITE_SUPABASE_URL=https://abcdefgh.supabase.co
   VITE_SUPABASE_ANON_KEY=paste-the-publishable-key-here
   ```

4. Save and close. This file stays on your computer — it is never uploaded to GitHub.

### Step E — Tell Claude you are done

Send a message with:

- the Vercel web address (for example `https://caretrail-xxxx.vercel.app`) — this is public, so it is fine to share
- the words "Phase 1 steps done"

Do not send the database password or any key.

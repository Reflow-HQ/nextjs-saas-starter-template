import "server-only";

import getAuth from "@/auth";

async function getPlans() {
  const auth = getAuth();
  const plansApiUrl = `${auth.apiBase}/stores/${auth.projectID}/plans/`;

  const response = await fetch(plansApiUrl, {
    next: { revalidate: 300 },
  });

  return response.json();
}

export { getPlans };

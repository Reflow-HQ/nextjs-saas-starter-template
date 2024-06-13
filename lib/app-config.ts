const appName: string = process.env.APP_NAME || "My Awesome App";

const appURL: string = process.env.APP_URL || "http://localhost:3000";

const reflowProjectID: number = parseInt(process.env.REFLOW_PROJECT_ID || "");

const reflowSessionSecret: string = process.env.REFLOW_SECRET || "";

const reflowTestMode: boolean = process.env.REFLOW_TEST_MODE == "true";

const paymentProvider: string = process.env.PAYMENT_PROVIDER || "stripe";

export {
  appName,
  appURL,
  reflowProjectID,
  reflowSessionSecret,
  reflowTestMode,
  paymentProvider,
};

import * as v from 'valibot';

export const envSchema = v.object({
  POSTGRES_URL: v.string(),
  PORT: v.optional(v.string())
});
const result = v.safeParse(envSchema, process.env);
if (!result.success) {
  throw new Error('Environment variable schema invalid.');
}
export const environmentVariables = result.output;

import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Event: a
    .model({
      name: a.string(),
      date: a.datetime(),
      description: a.string(),
      city: a.string(),
    })
    .authorization([a.allow.owner(), a.allow.private()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});

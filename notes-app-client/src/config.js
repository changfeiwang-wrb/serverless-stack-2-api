const dev = {
  STRIPE_KEY: "pk_test_BF5YZHB59bolupipB6VvJZd200Zq2kUhJF",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-qa4ghwon2c0m"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://oypkjib5ik.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_lllLIwXrR",
    APP_CLIENT_ID: "4fe2ma6et88boav6r3fsgi7vv4",
    IDENTITY_POOL_ID: "us-east-1:70c662f7-17a5-4324-881b-0ad74cb0eddc"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_BF5YZHB59bolupipB6VvJZd200Zq2kUhJF",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-mnueka5n52pr"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://1dz82whca1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_kgAv9HiRt",
    APP_CLIENT_ID: "647hi9h3983ggitpg54un6kgqv",
    IDENTITY_POOL_ID: "us-east-1:7eb1cadc-761e-4a70-8d48-ad5b47261c01"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
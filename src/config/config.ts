export const config = {
  "dev": {
    "username": process.env.UDAGRAM_POSTGRES_USERNAME,
    "password": process.env.UDAGRAM_PASSWORD,
    "database": process.env.UDAGRAM_DATABASE,
    "host": process.env.UDAGRAM_HOST,
    "dialect": "postgres",
    "aws_region": process.env.UDAGRAM_AWS_REGION,
    "aws_profile": "default",
    "aws_media_bucket": process.env.UDAGRAM_AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
"jwt":{
  "secret": process.env.JWT
}
}

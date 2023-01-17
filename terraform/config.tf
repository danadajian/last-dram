provider "aws" {
  region = "us-east-2"
}

terraform {
  backend "s3" {
    bucket = "last-dram-terraform-us-east-2"
    key    = "LastDram"
    region = "us-east-2"
  }
}

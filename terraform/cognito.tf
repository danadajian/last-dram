resource "aws_cognito_user_pool" "last-dram-user-pool" {
  name = "last-dram-user-pool"
  username_configuration {
    case_sensitive = false
  }
  auto_verified_attributes = ["email"]
  schema {
    attribute_data_type = "String"
    name                = "email"
    required            = true
    string_attribute_constraints {
      min_length = "0"
      max_length = "256"
    }
  }
  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }
}

resource "aws_cognito_user_pool_client" "client" {
  name = "last-dram-client"

  user_pool_id = aws_cognito_user_pool.last-dram-user-pool.id
}

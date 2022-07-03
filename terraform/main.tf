terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = var.region
  access_key = var.db_username
  secret_key = var.db_password
}

# Create a resouce: "<provider>_<resource>" "<name_to_this_resource>"
resource "aws_instance" "server" {
  # All the config options
  ami           = "ami-09e513e9eacab10c1"
  instance_type = "t2.micro"

  tags = {
       Name = "Web Server"  # Name of the server
  }
}
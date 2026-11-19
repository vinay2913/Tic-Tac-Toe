variable "aws_region" {
  description = "AWS region for deployment"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Prefix used for AWS resource names"
  type        = string
  default     = "tic-tac-toe"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "github_repo_url" {
  description = "Public HTTPS URL of this GitHub repository"
  type        = string
}

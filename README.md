# Tic Tac Toe – AWS & Terraform Deployment

A two-player Tic Tac Toe web game built with HTML, CSS and JavaScript, deployed on an AWS EC2 instance. Terraform provisions the AWS network and compute resources. EC2 user data installs Nginx and retrieves the static app from this public GitHub repository.

## Architecture

GitHub repository → Terraform → AWS VPC → Public subnet → Internet Gateway + route table → Security group (HTTP) → EC2 Ubuntu → Nginx → Tic Tac Toe website.

## Repository structure

```text
tic-tac-toe-devops/
├── app/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── user_data.sh.tftpl
│   └── terraform.tfvars.example
├── .gitignore
└── README.md
```

## Prerequisites

- AWS account and permissions to create VPC, subnet, route table, internet gateway, security group and EC2 resources.
- Terraform 1.5 or later.
- AWS CLI configured locally (`aws configure`).
- Git.
- A **public** GitHub repository containing this project. EC2 clones the repository during first boot.

## Deploy

1. Create a GitHub repository named `tic-tac-toe-devops` and push this project to its default branch.
2. Configure AWS credentials locally. Do not commit access keys.
3. From the project root, create the Terraform variable file:

   ```bash
   cp terraform/terraform.tfvars.example terraform/terraform.tfvars
   ```

4. Edit `terraform/terraform.tfvars` and replace the example GitHub URL with your public repository's HTTPS clone URL.
5. Run Terraform:

   ```bash
   cd terraform
   terraform init
   terraform fmt -recursive
   terraform validate
   terraform plan
   terraform apply
   ```

6. Get the website address:

   ```bash
   terraform output website_url
   ```

7. Wait a few minutes for EC2 user data to finish installing Nginx and cloning the repository, then open the output URL in a browser.

## Game features

- Two-player, turn-based X and O gameplay.
- Win detection across rows, columns and diagonals.
- Draw detection.
- New Game / reset button.
- Responsive layout for desktop and mobile.

## What Terraform creates

- VPC with CIDR `10.0.0.0/16`.
- Public subnet with CIDR `10.0.1.0/24`.
- Internet Gateway and default route to the internet.
- Route table association for the public subnet.
- Security group allowing inbound HTTP on TCP port 80.
- Ubuntu 24.04 EC2 instance (default type `t3.micro`) with a public IPv4 address.
- EC2 user data that installs Nginx and deploys the app from GitHub.

## Cleanup

When finished, remove the AWS resources to avoid ongoing charges:

```bash
cd terraform
terraform destroy
```

Review the plan and type `yes` to confirm.

## Important notes

- This is a learning/demo deployment, not a production-hardened architecture.
- HTTP is not encrypted. Add a domain and HTTPS/TLS before using this for real users.
- The web server is publicly accessible on port 80. SSH is intentionally not opened by this configuration.
- The GitHub repository must be public for the EC2 bootstrap script to clone it without credentials.
- EC2 user data runs at initial instance launch. If deployment fails, inspect `/var/log/cloud-init-output.log` on the instance. Replacing the instance or changing user data with `user_data_replace_on_change = true` triggers a new instance.
- AWS may charge for EC2, storage, public IPv4 and other resources. Check current AWS pricing and destroy resources when not in use.

## Learning outcomes

- Infrastructure as Code with Terraform.
- AWS VPC, subnet, Internet Gateway and routing.
- EC2 provisioning and security group configuration.
- Linux bootstrapping with EC2 user data.
- Nginx web hosting.
- Git/GitHub-based source control and deployment.

## Future improvements

- Add a CI/CD workflow using GitHub Actions or Jenkins.
- Build and publish a Docker image, then deploy it to EC2.
- Add HTTPS using a domain and TLS certificate.
- Add monitoring, logging and deployment health checks.

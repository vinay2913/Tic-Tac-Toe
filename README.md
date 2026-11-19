## Tic Tac Toe
# Tic Tac Toe Game – DevOps Project using AWS & Terraform

## Project Overview

This project demonstrates the deployment of a Tic Tac Toe web application using DevOps tools and cloud infrastructure.

The main objective is to automate infrastructure provisioning and simplify application deployment using Terraform and AWS.

The Tic Tac Toe game is a simple interactive web application where two players take turns marking X and O on a 3×3 grid. The game automatically identifies the winner or declares a draw.

The application is deployed on AWS infrastructure, demonstrating cloud computing, Infrastructure as Code (IaC), and DevOps practices.

## Technologies Used

- **HTML** – Application structure.
- **CSS** – Styling and user interface.
- **JavaScript** – Game logic and functionality.
- **AWS EC2** – Cloud server hosting.
- **AWS VPC** – Virtual private cloud networking.
- **Terraform** – Infrastructure provisioning.
- **Git & GitHub** – Source code management.
- **Linux** – Server management.
- **Apache/Nginx** – Web server.

## Project Architecture

The project follows this deployment workflow:

1. Develop the Tic Tac Toe application using HTML, CSS, and JavaScript.
2. Push the application source code to GitHub.
3. Use Terraform to provision AWS infrastructure.
4. Create an EC2 instance to host the application.
5. Configure the web server (Apache/Nginx).
6. Deploy the application files to the EC2 instance.
7. Access the game through the EC2 public IP address.

## Project Structure

```text
tic-tac-toe-devops/
│
├── index.html
├── style.css
├── script.js
│
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│
└── README.md
```

## Prerequisites

- AWS Account
- Terraform installed
- AWS CLI installed and configured
- Git installed
- Linux knowledge
- Basic knowledge of HTML, CSS, and JavaScript

## Deployment Steps

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd tic-tac-toe-devops
```

### 2. Configure AWS Credentials

```bash
aws configure
```

Enter your AWS Access Key, Secret Key, region, and output format.

### 3. Initialize Terraform

```bash
cd terraform
terraform init
```

### 4. Validate Terraform Configuration

```bash
terraform validate
```

### 5. Review Infrastructure Plan

```bash
terraform plan
```

### 6. Provision AWS Infrastructure

```bash
terraform apply
```

Type `yes` to confirm the infrastructure deployment.

### 7. Deploy the Application

Configure the EC2 instance with Apache or Nginx and copy the Tic Tac Toe application files into the web server's document root.

### 8. Access the Application

Open your browser and enter:

```text
http://<EC2-PUBLIC-IP>
```

The Tic Tac Toe game should be accessible through the EC2 instance.

## Expected Outcome

After successful deployment:

- AWS infrastructure is provisioned automatically using Terraform.
- An EC2 instance is created to host the application.
- A web server is configured to serve the application.
- The Tic Tac Toe game becomes accessible through the EC2 public IP.
- Users can play the game through a web browser.

## Learning Outcomes

Through this project, I gained practical knowledge of:

- Infrastructure as Code using Terraform.
- AWS cloud infrastructure provisioning.
- EC2 instance deployment and configuration.
- VPC and security group management.
- Linux server administration.
- Web application hosting using Apache/Nginx.
- Git and GitHub version control.
- Basic DevOps deployment workflow.

## Future Enhancements

- Implement CI/CD using Jenkins or GitHub Actions.
- Automate application deployment.
- Use Docker to containerize the application.
- Configure monitoring and logging.
- Implement HTTPS using SSL certificates.
- Deploy the application using an AWS automated pipeline.

## Conclusion

This project demonstrates how DevOps practices and Terraform can be used to automate cloud infrastructure provisioning and deploy a web application on AWS.

It combines basic frontend development with cloud computing, Linux administration, Infrastructure as Code, and application deployment.

The project provides hands-on experience with fundamental DevOps tools and AWS services.

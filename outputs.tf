output "website_url" {
  description = "URL of the deployed Tic Tac Toe game"
  value       = "http://${aws_instance.web.public_ip}"
}

output "ec2_public_ip" {
  description = "Public IPv4 address of the EC2 instance"
  value       = aws_instance.web.public_ip
}

output "vpc_id" {
  description = "ID of the created VPC"
  value       = aws_vpc.game.id
}

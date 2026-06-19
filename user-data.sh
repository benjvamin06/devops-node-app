#!/bin/bash
yum install -y amazon-cloudwatch-agent amazon-ssm-agent
systemctl enable --now amazon-cloudwatch-agent
systemctl enable --now amazon-ssm-agent
#!/bin/bash
set -e
cp ../server/prisma/schema.prisma ./schema.prisma
npx prisma generate
rm ./schema.prisma

/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[mollieId]` on the table `User`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mollieId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User.mollieId_unique" ON "User"("mollieId");

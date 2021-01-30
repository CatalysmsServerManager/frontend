/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[productId,userId]` on the table `Subscription`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Subscription.productId_userId_unique" ON "Subscription"("productId", "userId");

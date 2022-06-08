/*
  Warnings:

  - You are about to drop the column `direced_id` on the `Direct` table. All the data in the column will be lost.
  - You are about to drop the column `direcer_id` on the `Direct` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Direct" DROP CONSTRAINT "Direct_direced_id_fkey";

-- DropForeignKey
ALTER TABLE "Direct" DROP CONSTRAINT "Direct_direcer_id_fkey";

-- AlterTable
ALTER TABLE "Direct" DROP COLUMN "direced_id",
DROP COLUMN "direcer_id",
ADD COLUMN     "directed_id" INTEGER,
ADD COLUMN     "directer_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Direct" ADD CONSTRAINT "Direct_directer_id_fkey" FOREIGN KEY ("directer_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Direct" ADD CONSTRAINT "Direct_directed_id_fkey" FOREIGN KEY ("directed_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

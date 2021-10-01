/*
  Warnings:

  - You are about to drop the column `ator` on the `participante` table. All the data in the column will be lost.
  - You are about to drop the column `staff` on the `participante` table. All the data in the column will be lost.
  - Added the required column `ator_staff` to the `Participante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `participante` DROP COLUMN `ator`,
    DROP COLUMN `staff`,
    ADD COLUMN `ator_staff` VARCHAR(191) NOT NULL;

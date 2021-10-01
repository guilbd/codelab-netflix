-- DropForeignKey
ALTER TABLE `genero` DROP FOREIGN KEY `Genero_filme_fkey`;

-- DropForeignKey
ALTER TABLE `participante` DROP FOREIGN KEY `Participante_filme_fkey`;

-- AlterTable
ALTER TABLE `genero` MODIFY `filme` INTEGER;

-- AlterTable
ALTER TABLE `participante` MODIFY `filme` INTEGER;

-- AddForeignKey
ALTER TABLE `Genero` ADD CONSTRAINT `Genero_filme_fkey` FOREIGN KEY (`filme`) REFERENCES `Filme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participante` ADD CONSTRAINT `Participante_filme_fkey` FOREIGN KEY (`filme`) REFERENCES `Filme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

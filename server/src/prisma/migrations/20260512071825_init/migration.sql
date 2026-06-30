/*
  Warnings:

  - You are about to drop the column `authorId` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,cityName]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cityName` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_authorId_fkey";

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "authorId",
DROP COLUMN "createdAt",
DROP COLUMN "published",
DROP COLUMN "title",
DROP COLUMN "updatedAt",
ADD COLUMN     "cityName" TEXT NOT NULL,
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_cityName_key" ON "Favorite"("userId", "cityName");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

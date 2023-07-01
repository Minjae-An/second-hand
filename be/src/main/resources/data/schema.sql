
-- -----------------------------------------------------
-- Schema secondhand
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `secondhand` DEFAULT CHARACTER SET utf8mb4 ;
USE `secondhand` ;

-- -----------------------------------------------------
-- Table `region`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `region` (
                                        `id` SMALLINT NOT NULL AUTO_INCREMENT,
                                        `name` VARCHAR(64) NOT NULL,
    PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user` (
    `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
    `login_id` VARCHAR(32) NOT NULL,
    `profile_url` VARCHAR(1024) NOT NULL,
    `first_region_id` SMALLINT NOT NULL DEFAULT '1',
    `second_region_id` SMALLINT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `login_id_UNIQUE` (`login_id` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `category` (
                                          `id` SMALLINT NOT NULL AUTO_INCREMENT,
                                          `name` VARCHAR(64) NOT NULL,
    `photo_url` VARCHAR(1024) NOT NULL,
    PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `post_meta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `post_meta` (
    `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
    `seller_id` BIGINT(11) NOT NULL,
    `region_id` SMALLINT NOT NULL,
    `title` VARCHAR(64) NOT NULL,
    `price` BIGINT(11) NULL,
    `status` TINYINT(1) NOT NULL DEFAULT 0,
    `posted_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;,
    `deleted` TINYINT NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`),
    INDEX `fk_post_meta_region2_idx` (`region_id` ASC) VISIBLE,
    INDEX `fk_post_meta_user1_idx` (`seller_id` ASC) VISIBLE,
    CONSTRAINT `fk_post_meta_region2`
    FOREIGN KEY (`region_id`)
    REFERENCES `region` (`id`),
    CONSTRAINT `fk_post_meta_user1`
    FOREIGN KEY (`seller_id`)
    REFERENCES `user` (`id`));

-- -----------------------------------------------------
-- Table `post_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `post_detail` (
    `id` BIGINT(11) NOT NULL,
    `category_id` SMALLINT NOT NULL,
    `view` BIGINT(11) NOT NULL DEFAULT 0,
    `content` TEXT NULL,
    INDEX `fk_post_detail_post_meta1_idx` (`id` ASC) VISIBLE,
    INDEX `fk_post_detail_category1_idx` (`category_id` ASC) VISIBLE,
    CONSTRAINT `fk_post_detail_post_meta1`
    FOREIGN KEY (`id`)
    REFERENCES `post_meta` (`id`),
    CONSTRAINT `fk_post_detail_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `category` (`id`));


-- -----------------------------------------------------
-- Table `post_photo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `post_photo` (
    `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
    `post_meta_id` BIGINT(11) NOT NULL,
    `photo_url` VARCHAR(1024) NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_post_photo_post_meta1_idx` (`post_meta_id` ASC) VISIBLE,
    CONSTRAINT `fk_post_photo_post_meta1`
    FOREIGN KEY (`post_meta_id`)
    REFERENCES `post_meta` (`id`));

-- -----------------------------------------------------
-- Table `interest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interest` (
    `id` BIGINT(15) NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT(11) NOT NULL,
    `post_meta_id` BIGINT(11) NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_interest_user1_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_interest_post_meta1_idx` (`post_meta_id` ASC) VISIBLE,
    CONSTRAINT `fk_interest_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`),
    CONSTRAINT `fk_interest_post_meta1`
    FOREIGN KEY (`post_meta_id`)
    REFERENCES `post_meta` (`id`));


-- -----------------------------------------------------
-- Table`chatting_room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS`chatting_room` (
    `id` BIGINT(15) NOT NULL,
    `post_meta_id` BIGINT(11) NOT NULL,
    `buyer_id` BIGINT(11) NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_chatting_post_meta1_idx` (`post_meta_id` ASC) VISIBLE,
    INDEX `fk_chatting_user2_idx` (`buyer_id` ASC) VISIBLE,
    CONSTRAINT `fk_chatting_post_meta1`
    FOREIGN KEY (`post_meta_id`)
    REFERENCES `post_meta` (`id`),
    CONSTRAINT `fk_chatting_user2`
    FOREIGN KEY (`buyer_id`)
    REFERENCES `user` (`id`));



-- -----------------------------------------------------
-- Table `chatting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chatting` (
    `id` BIGINT(15) NOT NULL AUTO_INCREMENT,
    `chatting_room_id` BIGINT(15) NOT NULL,
    `sender_id` BIGINT(11) NOT NULL,
    `content` TEXT NOT NULL,
    `transmitted_at` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_chatting_chatting_room1_idx` (`chatting_room_id` ASC) VISIBLE,
    INDEX `fk_chatting_user1_idx` (`sender_id` ASC) VISIBLE,
    CONSTRAINT `fk_chatting_chatting_room1`
    FOREIGN KEY (`chatting_room_id`)
    REFERENCES `chatting_room` (`id`),
    CONSTRAINT `fk_chatting_user1`
    FOREIGN KEY (`sender_id`)
    REFERENCES `user` (`id`));

-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 01, 2017 at 05:51 PM
-- Server version: 5.5.57-0ubuntu0.14.04.1
-- PHP Version: 5.6.31-1~ubuntu14.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mynodedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `thumb_images`
--

CREATE TABLE IF NOT EXISTS `thumb_images` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `youtube_video_id` bigint(20) DEFAULT NULL,
  `thumb_url` varchar(255) DEFAULT NULL,
  `img_type` enum('default','medium','high','standard') NOT NULL DEFAULT 'standard',
  `height` int(11) DEFAULT NULL,
  `width` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `thumb_images`
--

INSERT INTO `thumb_images` (`id`, `youtube_video_id`, `thumb_url`, `img_type`, `height`, `width`) VALUES
(1, 1, '20170830222121.jpg', 'standard', 250, 250),
(2, 1, '20170830222125.jpg', 'standard', 250, 250),
(3, 1, '20170830222128.jpg', 'standard', 250, 250),
(4, 2, 'https://i.ytimg.com/vi/vex27S63da0/default.jpg', 'default', 90, 120),
(5, 2, 'https://i.ytimg.com/vi/vex27S63da0/mqdefault.jpg', 'medium', 180, 320),
(6, 2, 'https://i.ytimg.com/vi/vex27S63da0/hqdefault.jpg', 'high', 360, 480),
(7, 2, 'https://i.ytimg.com/vi/vex27S63da0/sddefault.jpg', 'standard', 480, 640);

-- --------------------------------------------------------

--
-- Table structure for table `youtube_videos`
--

CREATE TABLE IF NOT EXISTS `youtube_videos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('0','1') DEFAULT '0',
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8,
  `my_title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `my_desc` text CHARACTER SET utf8,
  `my_tags` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `content_type` enum('video','photo') NOT NULL DEFAULT 'video',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `youtube_videos`
--

INSERT INTO `youtube_videos` (`id`, `url`, `status`, `title`, `description`, `my_title`, `my_desc`, `my_tags`, `content_type`) VALUES
(1, '', '0', '', '', 'से', 'सेक्स', 'सेक्स ', 'photo'),
(2, 'https://www.youtube.com/watch?v=vex27S63da0', '0', 'Taarak Mehta Ka Ooltah Chashmah - Episode 952 - 31st August 2012', 'Tapu is upset as Jethalal is not allowing him to go to Mahabhaleshwar for Picnic with his school friends as he is extremely naughty thus she informs Goli that he is not coming for the Picnic and Goli informs Bhide that Tapu is not coming and excited Bhide decides to sends Sonu to Mahabhaleshwar as Tapu is not coming , there in Gada house Jethalal and Bauji reveals Tapu that they were fooling him and thus excited Tapu reveals Goli not to tell the truth to Bhide and Sonu as he wants to give them a huge surprise , next day morning, Bhide was shocked to see Tapu who was joining the troop. Jethalal misunderstands Bapuji and Magan''s conversations and thus he assumes that Magan Kaka is ill. What will be Jethalal''s next step?\n\nThe show is inspired from the famous humorous column ''Duniya Ne Undha Chasma'' written by the eminent Gujarati writer Mr. Tarak Mehta. This story evolves around happenings in "Gokuldham Co-operative Society" and covers topical issues which are socially relevant.The show predominantly  - Promoolves around ''Jethalaal'' (Dilip Joshi) who is an uneducated Gujarati businessman. Your ''Taarak Mehta'' (Sailesh Lodha), is his neighbour. ''Jethalaal'' finds a friend and philosopher in ''Taarak Mehta'' and often goes to him for advice whenever he is in trouble. Jethalaal''s family includes his simpleton wife ''Daya Ben'' (Disha Wakani) and a mischievous son ''Tapu'' (Bhavya Gandhi). Tapu is a menace and a constant source of trouble to all the members of Gokuldham. They have often warned ''Jethalaal'' to reform ''Tapu'' or else be prepared to leave the premises. Lost hopes of being heard by his son pushes Jethalaal'' to call his father ''Champaklal'' (Amit Bhatt) from the village. This was his great idea of leashing some control over the mischievous Tapu. The opposite happens and the grandfather joins hands with the grandson to make life a roller coaster troublesome ride for Jethalaal.', 'ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ', 'ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ये लो वीडियो ', 'ये लो ', 'video');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

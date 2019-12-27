-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-11-2019 a las 16:21:14
-- Versión del servidor: 10.1.33-MariaDB
-- Versión de PHP: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `olegra_quantum`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id` int(11) NOT NULL,
  `usuario` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `password` text COLLATE utf8_spanish_ci NOT NULL,
  `registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `usuario`, `password`, `registro`) VALUES
(2, 'ADMIN', '$2a$10$QdPGNvvgGvUImEymmMTzF.DxvTbP8nYcg/vYaR8sKTt3C5xT0vIsS', '2019-10-28 01:44:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `paterno` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `materno` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `grado` int(11) NOT NULL,
  `grupo` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `usuario` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `password` text COLLATE utf8_spanish_ci NOT NULL,
  `ortografia` int(11) NOT NULL,
  `lectura` int(11) NOT NULL,
  `gramatica` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id`, `nombre`, `paterno`, `materno`, `grado`, `grupo`, `usuario`, `password`, `ortografia`, `lectura`, `gramatica`, `id_profesor`, `registro`) VALUES
(3, 'Thor', 'López', 'López', 4, 'A', 'THOR', '$2a$10$TpjGyDmTNXt4s8E1wgSXm.K7kUoUJPJ6HjlYP8ulx8fzfaupaZU1G', 0, 0, 0, 2, '2019-10-31 09:14:58'),
(5, 'Batman', 'Mora', 'Mendoza', 3, 'B', 'BJM', '$2a$10$i0urnyYu3g79SPaP3H/RSuWQgne5kXymV0Jq8SOOkqV5FcpZ9wMOi', 0, 0, 40, 6, '2019-11-04 22:00:27'),
(7, 'Guasón', 'Pérez', 'Haros', 4, 'C', 'GPH', '$2a$10$.86VbLmJt5FdtJwk92bDDOdGLg4V4qO98OOLbWY0ALLucAT7T8ThW', 0, 0, 0, 6, '2019-11-03 14:05:32'),
(8, 'Strange', 'Hernández', 'Hernández', 4, 'B', 'DSHH', '$2a$10$z3lSBTRdOQ1a2X0vIiKY0OE0jkkH1xJ1f4D0Ku16494w..D4ah/qC', 0, 0, 0, 6, '2019-11-03 14:09:01'),
(9, 'Rick', 'Sánchez', 'JR', 1, 'B', 'RSJ', '$2a$10$KWjj4ladKa8aQemmPE7gWuouqlcEUoCCseoeFQCSjV6VwINiBcPzK', 0, 0, 0, 8, '2019-11-17 23:54:16'),
(10, 'Morty', 'Martinez', 'Gonzalez', 2, 'A', 'MMG', '$2a$10$/N8GadoAxguCMjz8tIjkPuFPZif3nNUz1S53KcU6gsDKMvF.lhDyu', 0, 0, 0, 8, '2019-11-17 23:55:13'),
(11, 'Cersei', 'Lanister', 'Baratheon', 5, 'B', 'CLB', '$2a$10$WGLlSeIyRs8NjGWz1NzIUOF36ikWq67mjpUnbACz07KWFbStDskqi', 0, 0, 0, 2, '2019-11-17 23:57:08'),
(12, 'Jhon', 'Snow', 'Targaryen', 6, 'C', 'JST', '$2a$10$oqQcKD8nx2uXSqvnXR2CfOy8y31gEoLTi60N6HstY2T7.jTp8f4gi', 0, 0, 0, 2, '2019-11-17 23:57:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lecciones`
--

CREATE TABLE `lecciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `grado` int(11) NOT NULL,
  `tema` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `contenido` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `lecciones`
--

INSERT INTO `lecciones` (`id`, `nombre`, `grado`, `tema`, `tipo`, `contenido`) VALUES
(1, 'Verbos, nombres y adjetivos', 4, 2, 2, '{\r\n    \"Palabras\": [\"duerme\", \"abanico\", \"cansada\", \"corre\", \"radio\", \"enfadado\", \"mar\", \"triste\", \"vuela\", \"selva\", \"hambriento\", \"gana\", \"desierto\", \"despierto\", \"ver\", \"cielo\", \"amargo\", \"camina\", \"ventilador\", \"verde\", \"saluda\"],\r\n    \"Solucion\": {\r\n        \"verbos\": [\"duerme\", \"corre\", \"vuela\", \"gana\", \"ver\", \"camina\", \"saluda\"],\r\n        \"nombres\": [\"abanico\", \"radio\", \"mar\", \"selva\", \"desierto\", \"cielo\", \"ventilador\"],\r\n        \"adjetivos\": [\"cansada\", \"enfadado\", \"triste\", \"hambriento\", \"despierto\", \"amargo\", \"verde\"]\r\n    }\r\n}'),
(2, 'Elige la palabra correcta', 4, 1, 3, '{\r\n    \"Ejercicios\": [{\r\n            \"Palabras\": [\"aprehender\", \"aprender\", \"aprehender\", \"aprender\", \"hacia\", \"Asia\", \"hacia\", \"Asia\", \"hora\", \"Ora\", \"hora\", \"Ora\"]\r\n        },\r\n        {\r\n            \"Palabras\": [\"aprehender\", \"aprender\", \"aprehender\", \"aprender\", \"hacia\", \"Asia\", \"hacia\", \"Asia\", \"hora\", \"Ora\", \"hora\", \"Ora\"]\r\n        },\r\n        {\r\n            \"Palabras\": [\"aprehender\", \"aprender\", \"aprehender\", \"aprender\", \"hacia\", \"Asia\", \"hacia\", \"Asia\", \"hora\", \"Ora\", \"hora\", \"Ora\"]\r\n        }\r\n    ],\r\n    \"Solucion\": [{\r\n            \"Palabras\": [\"aprehender\", \"aprender\", \"hacia\", \"Asia\", \"hora\", \"Ora\"]\r\n        },\r\n        {\r\n            \"Palabras\": [\"aprehender\", \"aprender\", \"hacia\", \"Asia\", \"hora\", \"Ora\"]\r\n        },\r\n        {\r\n            \"Palabras\": [\"aprehender\", \"aprender\", \"hacia\", \"Asia\", \"hora\", \"Ora\"]\r\n        }\r\n    ]\r\n}'),
(3, 'El príncipe feliz', 4, 3, 1, '{\r\n    \"url\": \"/assets/lecturas/elprincipefeliz.pdf\",\r\n    \"cuestionario\": {\r\n        \"first\": {\r\n            \"pregunta\": \"¿Qué eran las gotas que le  cayeron a la Golondrinita?\",\r\n            \"opciones\": [\"Lluvia\", \"Lagrimas del Príncipe Feliz\", \"Lagrimas del Rey Feliz\"]\r\n        },\r\n        \"second\":{\r\n            \"pregunta\": \"¿Dónde se dejo caer la Golondrinita?\",\r\n            \"opciones\": [\"Sobre la cabeza del Príncipe Feliz\", \"En los brazos de un niño\", \"A los pies del Príncipe Feliz\"]\r\n        },\r\n        \"third\":{\r\n            \"pregunta\": \"¿De qué material es el corazón del Príncipe Feliz?\",\r\n            \"opciones\": [\"Plata\", \"Oro\", \"Plomo\", \"Plata y plomo\"]\r\n        },\r\n        \"four\":{\r\n            \"pregunta\": \"Cuando era humano, el Príncipe Feliz vivía en:\",\r\n            \"opciones\": [\"Palacio de Buckingham\", \"Palacio de la Felicidad\", \"Palacio de la Depreocupación\", \"Palacio de la Alegría\"]\r\n        },\r\n        \"five\":{\r\n            \"pregunta\": \"La estatua tenia:\",\r\n            \"opciones\": [\"Dos centellantes rubíes como ojos\", \"Cabellos de madreselva\", \"Un pie de oro fino\", \"Dos centellantes zafiros como ojos\"]\r\n        }\r\n    }\r\n}'),
(4, 'El niño y el mar', 3, 3, 1, '{\r\n    \"url\": \"/assets/lecturas/elninoyelmar.pdf\",\r\n    \"cuestionario\": {\r\n        \"first\": {\r\n            \"pregunta\": \"¿Dónde vive el niño?\",\r\n            \"opciones\": [\"Junto al mar\", \"En la montaña\", \"En la ciudad\"]\r\n        },\r\n        \"second\": {\r\n            \"pregunta\": \"¿Cuánto tiempo pasa en la playa?\",\r\n            \"opciones\": [\"Un día cada mes\", \"Un mes cada año\", \"Una semana cada año\"]\r\n        },\r\n        \"third\": {\r\n            \"pregunta\": \"¿Cuál es el paraíso del niño?\",\r\n            \"opciones\": [\"Las charcas con cangrejos\", \"La arena y las olas\", \"Una isla en el mar\"]\r\n        },\r\n        \"four\": {\r\n            \"pregunta\": \"¿Qué lleva el niño a la playa?\",\r\n            \"opciones\": [\"Un cubo y una pala\", \"Una red y un cubo\", \"Una pelota y una pala\", \"Palacio de la Alegría\"]\r\n        },\r\n        \"five\": {\r\n            \"pregunta\": \"¿Qué es lo primero que hace en la playa?\",\r\n            \"opciones\": [\"Castillos de arena\", \"Salta las olas\", \"Busca cangrejos\"]\r\n        }\r\n    }\r\n}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `paterno` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `materno` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `usuario` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `password` text COLLATE utf8_spanish_ci NOT NULL,
  `cedula` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id`, `nombre`, `paterno`, `materno`, `usuario`, `password`, `cedula`, `registro`) VALUES
(2, 'Roberto', 'Gomez', 'Bolaños', 'ROBERTO', '$2a$10$F/lljWPn4JZDreX85m4iMes0PzceXAWniBHUpP9ealc/LISJ1aIeq', '123456', '2019-11-03 14:57:56'),
(6, 'Domingo', 'Perez', 'Perez', 'DPP', '$2a$10$hOC8IlKE1aH4aB5ooe3GPezx60JUnXH5I/hnCBrn.GYpNW/XvQvJu', '123456', '2019-11-03 15:00:32'),
(8, 'María', 'Morelos', 'Y Pavon', 'MMYP', '$2a$10$KEQDcY8/VaQgTbWQ3S3Zsu.aVRD778eHQnxGEkaVcGb7Qee1RdYVa', '123456', '2019-11-02 20:12:16'),
(9, 'Quetzalcoátl', 'Gonzáles', 'Cortés', 'QGC', '$2a$10$s/gYlb1oVkOQq1zpub8xWeY.svT2Cwgo7Edlm6iEGhSVSmTlqmI4u', '123456', '2019-11-02 20:15:43');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_profesor` (`id_profesor`);

--
-- Indices de la tabla `lecciones`
--
ALTER TABLE `lecciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `alumno`
--
ALTER TABLE `alumno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `lecciones`
--
ALTER TABLE `lecciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

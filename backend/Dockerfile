# ===== STAGE 1: Build =====
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
# Avval dependency'larni yuklab olish (cache uchun)
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn package -DskipTests -B

# ===== STAGE 2: Run =====
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# wget healthcheck uchun kerak (Alpine'da default mavjud)
RUN apk add --no-cache wget

COPY --from=build /app/target/*.jar app.jar

# Non-root user
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

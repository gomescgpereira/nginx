#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["DockerDefinitivo.Api/DockerDefinitivo.Api.csproj", "DockerDefinitivo.Api/"]
RUN dotnet restore "DockerDefinitivo.Api/DockerDefinitivo.Api.csproj"
COPY . .
WORKDIR "/src/DockerDefinitivo.Api"
RUN dotnet build "DockerDefinitivo.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DockerDefinitivo.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DockerDefinitivo.Api.dll"]

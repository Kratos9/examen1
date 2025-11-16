# Imagen base
FROM python:3.11-slim

# Crear directorio de trabajo
WORKDIR /app

# Copiar requirements e instalar
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código
COPY app.py .

# Variable de entorno
ENV PORT=5000

# Exponer puerto
EXPOSE 5000

# Crear usuario no-root
RUN useradd -m appuser
USER appuser

# Ejecutar la aplicación
CMD ["python", "app.py"]

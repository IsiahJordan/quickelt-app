FROM python:3.13.7

WORKDIR /api  
COPY requirements.txt requirements.txt 

RUN pip install -r requirements.txt

COPY . .
CMD ["fastapi", "dev", "service.py", "--host", "0.0.0.0", "--port", "8000"]


# ECO-AFRIQA

Freshly is a sustainable food production platform designed to empower urban dwellers to become farmers and produce fresh, eco-friendly food using locally available resources. Our mission is to promote environmental stewardship, community resilience, and healthy food access through innovative urban farming solutions.

ECO-AFRIQA is an e-commerce farming platform built with Django, MySQL, and Django REST Framework. The platform allows farmers to list their products and customers to place orders seamlessly.

# BACKEND
# Table of Contents
- Features
- Installation
- Usage
- API Endpoints
- Security
- Performance
- Contributing
- License

# Features
- Farmer Management: Register and manage farmers.
- Product Management: Add, update, and delete farming products.
- Order Management: Place and track orders.
- API: RESTful API for integrating with frontend applications.
  
# Installation
# Prerequisites
- Python 3.6+
- MySQL
- pip (Python package installer)
- Django 5.0.6
- ReactJs
  
# Steps

1. # Clone the repository:
```bash
git clone https://github.com/Simacoder/ECO-AFRIQA.git
    cd ECO-AFRIQA
```
2. # Create a virtual environment:
```bash
python -m venv env
source env/bin/activate   # On Windows, use `env\Scripts\activate`
```
3. # Install dependencies:
```bash
pip install -r requirements.txt
```
4. # Configure the database:
```bash
Create a MySQL database and user as follows:
CREATE DATABASE ecoafriqa_db;
CREATE USER 'ecoafriqa_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON ecoafriqa_db.* TO 'ecoafriqa_user'@'localhost';
FLUSH PRIVILEGES;
```
Update the database settings in myfarm/settings.py:
```bash
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'ecoafriqa_db',
        'USER': 'ecoafriqa_user',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '3306',
            }
        }
```
5. # Apply migrations:
```bash
    python manage.py makemigrations
    python manage.py migrate
```

6. # Create a superuser:
```bash
python manage.py createsuperuser
```
7. # Run the development server:
```bash
    python manage.py runserver
```

# Usage
- Access the admin panel at http://127.0.0.1:8000/admin/ to manage farmers, products, and orders.
- Use the API endpoints to interact with the platform programmatically.

# API Endpoints
## Farmers
- `GET /api/farmers/` - List all farmers
- `POST /api/farmers/` - Create a new farmer
- `GET /api/farmers/{id}/` - Retrieve a specific farmer
- `PUT /api/farmers/{id}/` - Update a specific farmer
- `DELETE /api/farmers/{id}/` - Delete a specific farmer 
  
# Products
- `GET /api/products/` - List all products
- `POST /api/products/` - Create a new product
- `GET /api/products/{id}/` - Retrieve a specific product
- `PUT /api/products/{id}/` - Update a specific product
- `DELETE /api/products/{id}/` - Delete a specific product

# Orders
- `GET /api/orders/` - List all orders
- `POST /api/orders/` - Create a new order
- `GET /api/orders/{id}/` - Retrieve a specific order
- `PUT /api/orders/{id}/` - Update a specific order
- `DELETE /api/orders/{id}/` - Delete a specific order

# Security
- Ensure to set DEBUG = False in production settings.
- Use environment variables to manage sensitive information.
- Enforce HTTPS and use secure cookies.
- Implement proper authentication and authorization.

# Performance
- Use caching to improve performance.
- Optimize database queries and use indexing.
- Serve static files using a CDN.
- Use connection pooling for database connections.
- Deploy with a production-ready web server like gunicorn or uwsgi behind nginx.

# Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -am 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a new Pull Request.

# License
This project is licensed under the MIT License. See the [LICENSE] file for details.


# Final Project Structure
```bash
eco-afriqa/
│
├── freshly/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── Products/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── migrations/
│   │   └── __init__.py
│   └── tests.py
│
├── manage.py
└── requirements.txt
```

Urban Farming Made Easy: FreshlyFarm provides a user-friendly platform for individuals and communities to participate in farming activities, including community gardens, rooftop gardens, vertical farming, and more.

>Local Resource Utilization: We maximize the use of locally available resources, such as organic waste, compost, rainwater harvesting, and renewable energy sources, to minimize environmental impact and promote sustainability.

>Eco-Friendly Production Practices: We embrace organic farming methods and agroecological principles to prioritize soil health, biodiversity conservation, and natural pest management.

>Crop Diversity and Seasonality: UrbanFarm cultivates a diverse range of crops that are well-suited to local growing conditions and seasonal variations, promoting biodiversity and resilience in the food system.

>Community Engagement: We foster a sense of community and collaboration by organizing events, workshops, and social gatherings that facilitate knowledge sharing, networking, and collective action.

Getting Started
To get started with FreshlyFarm, simply sign up for an account on our platform. Once registered, you'll have access to resources, educational materials, and tools to start your urban farming journey.

Contributing
We welcome contributions from the community to help improve FreshlyFarm and make it even more impactful. Whether you're a developer, designer, gardener, or sustainability enthusiast, there are many ways to get involved. Check out our contributing guidelines to learn how you can contribute.

Contact Us
Have questions, feedback, or ideas for UrbanFarm? We'd love to hear from you! Feel free to contact us or join our community forum to connect with like-minded individuals.

License
Farm is licensed under the MIT License. Feel free to use, modify, and distribute the code for your own sustainable food production initiatives.


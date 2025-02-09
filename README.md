Node.js Microservices Communication Using RabbitMQ
Introduction to Microservices
Microservices architecture structures an application as a collection of small, independent services. Each service runs in its own memory space and can scale separately, enabling better performance and maintainability across multiple servers.

Why Use RabbitMQ?
RabbitMQ is a message broker that enables asynchronous communication between microservices. Instead of processing messages immediately, RabbitMQ places them in a queue, allowing web servers to remain responsive and avoid being blocked by long-running tasks. It ensures reliable message delivery, enabling services to function independently while maintaining a robust communication pipeline.

Setting Up the Project Locally
1️⃣ Install Dependencies
To install required packages for both microservices, run:

sh
Copy
Edit
npm install
2️⃣ Running RabbitMQ Locally Using Docker
Ensure Docker is running, then start RabbitMQ:

For Mac (Intel) / Windows:
sh
Copy
Edit
docker run -d --name amqp.test -p 5672:5672 rabbitmq
For Mac (M1/M2 - ARM64)
sh
Copy
Edit
docker run -d --name amqp.test -p 5672:5672 arm64v8/rabbitmq
3️⃣ Starting the Microservices
Run the following command in both User-Management-Service and Session-Management-Service directories:

sh
Copy
Edit
npm run start
After starting both services, send a POST request to:

bash
Copy
Edit
http://localhost:3000/users/save
✅ This will add a message to the queue in RabbitMQ. The Session-Management-Service will then process it in real-time.

When to Use Microservices Architecture?
Microservices work best when building large-scale applications that require scalability, flexibility, and fault isolation. However, for smaller projects, they can introduce unnecessary complexity.

Key Benefits of Microservices:
Scalability: Services can scale independently based on demand.
Independent Deployment: Updates can be applied to one service without affecting others.
Fault Isolation: If one service fails, it doesn’t bring down the entire system.
Flexibility in Technology Choices: Different services can use different tech stacks or databases.
This version keeps the meaning clear, concise, and structured. Let me know if you need any modifications! 🚀

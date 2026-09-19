1. Deploying a monorepo — HTTP, WebSockets, Prisma, PostgreSQL, Next.js
2. Environment variables
3. Dev vs. prod environments and periodic releases
4. Testing in CI pipelines
5. Certificate management
6. CD pipeline to refresh certificates every month

________________________________________________________________________________________________________________

1. Create 2 servers.
2. Install Node and Nginx on both.
3. Clone the monorepo onto both servers.
4. Start 3 processes: Next.js, WebSocket, and HTTP.
5. Point domains to the respective servers:
    * www.week-25-100xdevs.com
    * week-25-http.100xdevs.com
    * week-25-ws.100xdevs.com
    * week-25-fe.100xdevs.com
    * Staging equivalents for each.
6. Refresh the Nginx configuration.
7. Test that everything works.


https://github.com/100xdevs-cohort-3/week-25-ci-next-app
FROM caddy:latest

# Copy the Caddyfile into the container at /etc/caddy
COPY Caddyfile /etc/caddy/

# Copy your site's files into the container at /srv
COPY my-caddy-server /srv

# Expose port 80 and 443 to the world
EXPOSE 80
EXPOSE 443

# Define the default command to run
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]

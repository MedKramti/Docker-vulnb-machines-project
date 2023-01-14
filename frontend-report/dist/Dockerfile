FROM tomcat:8.0-alpine
RUN rm -R /usr/local/tomcat/webapps/ROOT/*
COPY ./frontend-report/ /usr/local/tomcat/webapps/ROOT/
CMD ["catalina.sh", "run"]

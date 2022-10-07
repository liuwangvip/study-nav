package com.isoler.studynav;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.ApplicationPidFileWriter;

@SpringBootApplication
@MapperScan(basePackages = "com.isoler.studynav.business.**.mapper")
public class StudyNavApplication {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(StudyNavApplication.class);
        app.addListeners(new ApplicationPidFileWriter());
        app.run(args);
    }

}

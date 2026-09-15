import org.jetbrains.kotlin.gradle.tasks.KotlinJvmCompile

buildscript {
    repositories {
        google()
        mavenCentral()
        maven("https://jitpack.io")
    }
    dependencies {
        classpath("com.android.tools.build:gradle:8.9.0")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:2.2.0")
        classpath("org.jetbrains.kotlin:kotlin-serialization:2.2.0")
        classpath("com.google.devtools.ksp:symbol-processing-api:2.2.0-2.0.2")
        classpath("com.google.devtools.ksp:symbol-processing-gradle-plugin:2.2.0-2.0.2")
    }
}

tasks.register<Delete>("clean") {
    delete(layout.buildDirectory)
}

tasks.withType<KotlinJvmCompile>().configureEach {
    compilerOptions {
        freeCompilerArgs.add("-opt-in=kotlin.RequiresOptIn")
    }
}

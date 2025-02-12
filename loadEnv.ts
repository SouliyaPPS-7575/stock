import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

/**
 * Load environment variables from .env files
 * Supports multiple modes like .env, .env.local, .env.development, etc.
 */
function loadEnv(mode: string, cwd: string): Record<string, string> {
    const envFiles = [
        '.env',               // Default environment file
        `.env.${mode}`,       // Mode-specific environment file (e.g., .env.production)
        `.env.${mode}.local`, // Mode-specific local environment file (e.g., .env.production.local)
    ];

    const envVars: Record<string, string> = {};

    envFiles.forEach((file) => {
        const envFilePath = path.resolve(cwd, file); // Use `cwd` instead of `process.cwd()`

        if (fs.existsSync(envFilePath)) {
            const result = dotenv.parse(fs.readFileSync(envFilePath));
            Object.assign(envVars, result);
        }
    });

    return envVars;
}

export default loadEnv;
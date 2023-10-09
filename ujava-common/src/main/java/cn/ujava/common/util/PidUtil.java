package cn.ujava.common.util;

import java.lang.management.ManagementFactory;
import java.util.Map;

/**
 * @author yangchunjian
 * @since 3.0.4
 */
public class PidUtil {
    private static String PID = "-1";
    private static long pid = -1;

    private static String MAIN_CLASS = "";

    static {
        // https://stackoverflow.com/a/7690178
        try {
            String jvmName = ManagementFactory.getRuntimeMXBean().getName();
            int index = jvmName.indexOf('@');

            if (index > 0) {
                PID = Long.toString(Long.parseLong(jvmName.substring(0, index)));
                pid = Long.parseLong(PID);
            }
        } catch (Throwable e) {
            // ignore
        }

        try {
            for (final Map.Entry<String, String> entry : System.getenv().entrySet()) {
                if (entry.getKey().startsWith("JAVA_MAIN_CLASS")) // like JAVA_MAIN_CLASS_13328
                    MAIN_CLASS = entry.getValue();
            }
        } catch (Throwable e) {
            // ignore
        }

    }

    private PidUtil() {
    }

    public static String currentPid() {
        return PID;
    }

    public static long currentLongPid() {
        return pid;
    }

    public static String mainClass() {
        return MAIN_CLASS;
    }
}

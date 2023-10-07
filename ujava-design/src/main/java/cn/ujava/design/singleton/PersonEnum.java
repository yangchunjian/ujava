package cn.ujava.design.singleton;

/**
 * 枚举
 * PersonEnum.INSTANCE.getInstance()
 */
public enum PersonEnum {
    INSTANCE;

    private Person instance;
    private PersonEnum(){
        instance = new Person();
    }

    public Person getInstance() {
        return instance;
    }

}

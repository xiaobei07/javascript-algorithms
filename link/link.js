class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
/**
 * 链表具备的功能
 * 1、获取长度
 * 2、是否空节点
 * 3、最后一个节点
 * 4、添加节点
 * 5、查找节点
 * 6、删除节点
 */
class Link {

    constructor() {
        this.head = new Node(null)
        this.currentNode = ''
        this.size = 0
    }

    getLength () {
        return this.size
    }

    isEmpty () {
        return !this.size
    }

    getLastNode () {
        let currentNode = this.head

        while(currentNode && currentNode.next !== null) {
            currentNode = currentNode.next
        }

        return currentNode
    }

    addLinkNode (data) {
        const newNode = new Node(data)
        const lastLinkNode = this.getLastNode()

        lastLinkNode.next = newNode
        this.size++
    }

    findLinkNode (data) {
        let currentNode = this.head
        while( currentNode && (currentNode !== data)) {
            currentNode = currentNode.next
        }

        return currentNode
    }

    removeLinkNode (data) {
        const tarLinkNode = this.findLinkNode(data)

        if(!tarLinkNode) {
            return
        }

        let currentLinkNode = this.head

        while(currentLinkNode && currentLinkNode.next && currentLinkNode.next.data !== data) {
            currentLinkNode = currentLinkNode.next
        }

        currentLinkNode.next = currentLinkNode.next?.next || null
    }

}

export default Link